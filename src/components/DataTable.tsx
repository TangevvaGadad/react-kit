import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, MoreHorizontal, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

export interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
  width?: string | number;
  render?: (value: any, row: T, index: number) => React.ReactNode;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  multiSelect?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  className?: string;
  emptyMessage?: string;
  stickyHeader?: boolean;
}

type SortDirection = 'asc' | 'desc' | null;

interface SortState<T> {
  column: keyof T | null;
  direction: SortDirection;
}

const DataTable = <T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  multiSelect = true,
  onRowSelect,
  className,
  emptyMessage = 'No data available',
  stickyHeader = false
}: DataTableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [sortState, setSortState] = useState<SortState<T>>({
    column: null,
    direction: null
  });

  // Sort data based on current sort state
  const sortedData = useMemo(() => {
    if (!sortState.column || !sortState.direction) {
      return data;
    }

    return [...data].sort((a, b) => {
      const aValue = a[sortState.column!];
      const bValue = b[sortState.column!];

      if (aValue < bValue) {
        return sortState.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortState.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortState]);

  // Handle column sorting
  const handleSort = (column: keyof T) => {
    const columnConfig = columns.find(col => col.key === column);
    if (!columnConfig?.sortable) return;

    setSortState(prev => {
      if (prev.column === column) {
        // Cycle through: asc -> desc -> null
        if (prev.direction === 'asc') {
          return { column, direction: 'desc' };
        } else if (prev.direction === 'desc') {
          return { column: null, direction: null };
        }
      }
      return { column, direction: 'asc' };
    });
  };

  // Handle row selection
  const handleRowSelection = (index: number, checked: boolean) => {
    const newSelectedRows = new Set(selectedRows);
    
    if (checked) {
      if (multiSelect) {
        newSelectedRows.add(index);
      } else {
        newSelectedRows.clear();
        newSelectedRows.add(index);
      }
    } else {
      newSelectedRows.delete(index);
    }
    
    setSelectedRows(newSelectedRows);
    
    if (onRowSelect) {
      const selectedData = Array.from(newSelectedRows).map(i => sortedData[i]);
      onRowSelect(selectedData);
    }
  };

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIndexes = new Set(sortedData.map((_, index) => index));
      setSelectedRows(allIndexes);
      if (onRowSelect) {
        onRowSelect(sortedData);
      }
    } else {
      setSelectedRows(new Set());
      if (onRowSelect) {
        onRowSelect([]);
      }
    }
  };

  const isAllSelected = selectedRows.size === sortedData.length && sortedData.length > 0;
  const isIndeterminate = selectedRows.size > 0 && selectedRows.size < sortedData.length;

  const renderSortIcon = (column: keyof T) => {
    const columnConfig = columns.find(col => col.key === column);
    if (!columnConfig?.sortable) return null;

    if (sortState.column === column) {
      if (sortState.direction === 'asc') {
        return <ChevronUp className="h-4 w-4" />;
      } else if (sortState.direction === 'desc') {
        return <ChevronDown className="h-4 w-4" />;
      }
    }
    
    return (
      <div className="flex flex-col opacity-30">
        <ChevronUp className="h-3 w-3 -mb-1" />
        <ChevronDown className="h-3 w-3" />
      </div>
    );
  };

  if (loading) {
    return (
      <div className={cn("border rounded-lg", className)}>
        <div className="p-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">Loading data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("border rounded-lg overflow-hidden", className)}>
      <div className={cn("overflow-auto", stickyHeader && "max-h-96")}>
        <table className="w-full">
          <thead 
            className={cn(
              "border-b bg-muted/50",
              stickyHeader && "sticky top-0 z-10"
            )}
          >
            <tr>
              {selectable && (
                <th className="w-12 p-4">
                  {multiSelect && (
                    <Checkbox
                      checked={isAllSelected}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all rows"
                      className={isIndeterminate ? "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" : ""}
                    />
                  )}
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={cn(
                    "text-left p-4 font-medium text-muted-foreground",
                    column.sortable && "cursor-pointer hover:text-foreground transition-colors select-none"
                  )}
                  style={{ width: column.width }}
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {renderSortIcon(column.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length === 0 ? (
              <tr>
                <td 
                  colSpan={columns.length + (selectable ? 1 : 0)} 
                  className="p-8 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              sortedData.map((row, index) => (
                <tr
                  key={index}
                  className={cn(
                    "border-b hover:bg-muted/50 transition-colors",
                    selectedRows.has(index) && "bg-muted/30"
                  )}
                >
                  {selectable && (
                    <td className="p-4">
                      <Checkbox
                        checked={selectedRows.has(index)}
                        onCheckedChange={(checked) => handleRowSelection(index, checked as boolean)}
                        aria-label={`Select row ${index + 1}`}
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      className="p-4 text-sm"
                      style={{ width: column.width }}
                    >
                      {column.render 
                        ? column.render(row[column.key], row, index)
                        : row[column.key]
                      }
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { DataTable };
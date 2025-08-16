import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DataTable, Column } from './DataTable';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Info, Users } from 'lucide-react';

// Sample data types
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
}

// Sample data
const sampleUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active', joinDate: '2024-02-01' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive', joinDate: '2024-01-30' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'pending', joinDate: '2024-03-10' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'active', joinDate: '2024-02-15' },
];

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## DataTable Component

A powerful, accessible data table component with sorting, selection, and customizable rendering capabilities.

### Key Features
- **Data Display**: Tabular data presentation with customizable columns
- **Sorting**: Click column headers to sort data ascending/descending
- **Row Selection**: Single or multiple row selection with checkboxes
- **Loading States**: Built-in loading spinner and empty state handling
- **Custom Rendering**: Flexible column rendering with custom components
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Responsive**: Adapts to different screen sizes with horizontal scrolling

### Use Cases
- User management tables
- Product catalogs
- Financial data display
- Analytics dashboards
- Admin panels
- Data-heavy applications
        `,
      },
    },
  },
  argTypes: {
    loading: {
      control: { type: 'boolean' },
      description: 'Shows loading spinner and message',
    },
    selectable: {
      control: { type: 'boolean' },
      description: 'Enables row selection with checkboxes',
    },
    multiSelect: {
      control: { type: 'boolean' },
      description: 'Allows multiple row selection',
    },
    stickyHeader: {
      control: { type: 'boolean' },
      description: 'Makes header stick to top during scroll',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic DataTable
export const Default: Story = {
  render: () => {
    const columns: Column<User>[] = [
      { key: 'name', header: 'Name', sortable: true },
      { key: 'email', header: 'Email', sortable: true },
      { key: 'role', header: 'Role', sortable: true },
      { key: 'status', header: 'Status', sortable: true },
      { key: 'joinDate', header: 'Join Date', sortable: true },
    ];

    return (
      <div className="w-full max-w-4xl">
        <DataTable data={sampleUsers} columns={columns} />
      </div>
    );
  },
};

// With Row Selection
export const WithSelection: Story = {
  render: () => {
    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
    
    const columns: Column<User>[] = [
      { key: 'name', header: 'Name', sortable: true },
      { key: 'email', header: 'Email', sortable: true },
      { key: 'role', header: 'Role', sortable: true },
      { key: 'status', header: 'Status', sortable: true },
    ];

    return (
      <div className="w-full max-w-4xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">User Management</h3>
          {selectedUsers.length > 0 && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              {selectedUsers.length} user(s) selected
            </Badge>
          )}
        </div>
        
        <DataTable
          data={sampleUsers}
          columns={columns}
          selectable
          onRowSelect={setSelectedUsers}
        />
      </div>
    );
  },
};

// Custom Column Rendering
export const CustomRendering: Story = {
  render: () => {
    const columns: Column<User>[] = [
      { key: 'name', header: 'Name', sortable: true },
      { key: 'role', header: 'Role', sortable: true, render: (value) => (
        <Badge variant={value === 'Admin' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      )},
      { key: 'status', header: 'Status', sortable: true, render: (value) => (
        <Badge 
          variant={
            value === 'active' ? 'default' : 
            value === 'inactive' ? 'destructive' : 
            'secondary'
          }
        >
          {value}
        </Badge>
      )},
      { key: 'joinDate', header: 'Join Date', sortable: true, render: (value) => 
        new Date(value).toLocaleDateString()
      },
    ];

    return (
      <div className="w-full max-w-4xl">
        <DataTable data={sampleUsers} columns={columns} />
      </div>
    );
  },
};

// Loading State
export const LoadingState: Story = {
  render: () => {
    const columns: Column<User>[] = [
      { key: 'name', header: 'Name', sortable: true },
      { key: 'email', header: 'Email', sortable: true },
      { key: 'role', header: 'Role', sortable: true },
    ];

    return (
      <div className="w-full max-w-4xl">
        <DataTable data={[]} columns={columns} loading />
      </div>
    );
  },
};

// Empty State
export const EmptyState: Story = {
  render: () => {
    const columns: Column<User>[] = [
      { key: 'name', header: 'Name', sortable: true },
      { key: 'email', header: 'Email', sortable: true },
      { key: 'role', header: 'Role', sortable: true },
    ];

    return (
      <div className="w-full max-w-4xl">
        <DataTable 
          data={[]} 
          columns={columns} 
          emptyMessage="No users found. Try adjusting your search criteria."
        />
      </div>
    );
  },
};

// Best Practices
export const BestPractices: Story = {
  render: () => (
    <div className="w-full max-w-4xl space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Best Practices & Guidelines</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-4 w-4" />
                Do's
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>• Use descriptive column headers</p>
              <p>• Implement proper sorting for relevant columns</p>
              <p>• Provide loading and empty states</p>
              <p>• Use appropriate data types and formatting</p>
              <p>• Ensure responsive design for mobile</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertCircle className="h-4 w-4" />
                Don'ts
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>• Don't overload tables with too many columns</p>
              <p>• Avoid complex nested data structures</p>
              <p>• Don't use tables for layout purposes</p>
              <p>• Avoid auto-sorting without user control</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  ),
};

// Playground
export const Playground: Story = {
  render: (args) => {
    const [selectedData, setSelectedData] = useState<User[]>([]);
    
    const columns: Column<User>[] = [
      { key: 'name', header: 'Name', sortable: true },
      { key: 'email', header: 'Email', sortable: true },
      { key: 'role', header: 'Role', sortable: true },
      { key: 'status', header: 'Status', sortable: true },
    ];

    return (
      <div className="w-full max-w-4xl space-y-4">
        <DataTable
          {...args}
          data={sampleUsers}
          columns={columns}
          onRowSelect={setSelectedData}
        />
      </div>
    );
  },
  args: {
    selectable: true,
    loading: false,
    stickyHeader: false,
    emptyMessage: 'No data available',
  },
};
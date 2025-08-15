import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, Column } from './DataTable';
import { Badge } from '@/components/ui/badge';

// Sample data types
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  avatar?: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

// Sample data
const sampleUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active', joinDate: '2024-02-01' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive', joinDate: '2024-01-30' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'pending', joinDate: '2024-03-10' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'active', joinDate: '2024-02-15' },
];

const sampleProducts: Product[] = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99.99, stock: 45, rating: 4.5 },
  { id: 2, name: 'Smart Watch', category: 'Electronics', price: 199.99, stock: 23, rating: 4.2 },
  { id: 3, name: 'Coffee Mug', category: 'Kitchen', price: 12.99, stock: 100, rating: 4.8 },
  { id: 4, name: 'Desk Lamp', category: 'Office', price: 45.00, stock: 12, rating: 4.1 },
  { id: 5, name: 'Notebook', category: 'Office', price: 8.99, stock: 200, rating: 4.6 },
];

// Column definitions
const userColumns: Column<User>[] = [
  {
    key: 'name',
    header: 'Name',
    sortable: true,
  },
  {
    key: 'email',
    header: 'Email',
    sortable: true,
  },
  {
    key: 'role',
    header: 'Role',
    sortable: true,
    render: (value) => (
      <Badge variant={value === 'Admin' ? 'default' : 'secondary'}>
        {value}
      </Badge>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: (value) => (
      <Badge 
        variant={
          value === 'active' ? 'default' : 
          value === 'inactive' ? 'destructive' : 
          'secondary'
        }
      >
        {value}
      </Badge>
    ),
  },
  {
    key: 'joinDate',
    header: 'Join Date',
    sortable: true,
    render: (value) => new Date(value).toLocaleDateString(),
  },
];

const productColumns: Column<Product>[] = [
  {
    key: 'name',
    header: 'Product Name',
    sortable: true,
  },
  {
    key: 'category',
    header: 'Category',
    sortable: true,
    render: (value) => (
      <Badge variant="outline">{value}</Badge>
    ),
  },
  {
    key: 'price',
    header: 'Price',
    sortable: true,
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    key: 'stock',
    header: 'Stock',
    sortable: true,
    render: (value) => (
      <span className={value < 20 ? 'text-destructive font-medium' : ''}>
        {value}
      </span>
    ),
  },
  {
    key: 'rating',
    header: 'Rating',
    sortable: true,
    render: (value) => `⭐ ${value}`,
  },
];

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# DataTable Component

An advanced data table component with sorting, selection, and customizable rendering capabilities.

## Features

- **Column Sorting**: Click headers to sort data ascending/descending
- **Row Selection**: Single or multiple row selection with checkboxes
- **Custom Rendering**: Custom cell renderers for complex data display
- **Loading States**: Built-in loading spinner and empty state
- **Sticky Header**: Keep headers visible while scrolling
- **Responsive Design**: Horizontal scroll for narrow viewports

## Anatomy

The DataTable component includes:
- Header row with sortable column titles
- Data rows with selectable checkboxes (optional)
- Sort indicators for sortable columns
- Loading and empty state displays
- Custom cell renderers for complex content

## Accessibility Features

- **Keyboard Navigation**: Tab through interactive elements
- **ARIA Labels**: Proper labeling for screen readers
- **Sort Indicators**: Visual and programmatic sort state
- **Selection State**: Clear indication of selected rows
- **Focus Management**: Proper focus indicators

## Best Practices

### Do's
- Use clear, descriptive column headers
- Implement custom renderers for complex data
- Provide loading states for async data
- Use appropriate selection modes
- Test with keyboard navigation

### Don'ts
- Don't make all columns sortable if it doesn't make sense
- Avoid overly complex cell renderers
- Don't hide important actions in overflow menus
- Avoid inconsistent data formatting
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    selectable: {
      control: 'boolean',
      description: 'Enable row selection',
    },
    multiSelect: {
      control: 'boolean',
      description: 'Allow multiple row selection',
    },
    stickyHeader: {
      control: 'boolean',
      description: 'Keep header visible while scrolling',
    },
    emptyMessage: {
      control: 'text',
      description: 'Message shown when no data is available',
    },
  },
  args: {
    onRowSelect: () => {},
  },
} satisfies Meta<typeof DataTable<any>>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
};

export const WithSelection: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
  },
};

export const SingleSelection: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
    multiSelect: false,
  },
};

// States
export const LoadingState: Story = {
  args: {
    data: [],
    columns: userColumns,
    loading: true,
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns: userColumns,
    emptyMessage: 'No users found. Try adjusting your search criteria.',
  },
};

export const CustomEmptyMessage: Story = {
  args: {
    data: [],
    columns: productColumns,
    emptyMessage: '🛍️ No products available at the moment. Check back later!',
  },
};

// Advanced Features
export const StickyHeader: Story = {
  args: {
    data: [...sampleUsers, ...sampleUsers, ...sampleUsers], // More data to show scrolling
    columns: userColumns,
    stickyHeader: true,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'With sticky header enabled, the header row stays visible while scrolling through data.',
      },
    },
  },
};

export const ProductTable: Story = {
  args: {
    data: sampleProducts,
    columns: productColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with different data type showing custom cell renderers for pricing, stock levels, and ratings.',
      },
    },
  },
};

// Custom Rendering Examples
export const WithCustomRendering: Story = {
  args: {
    data: sampleUsers,
    columns: [
      {
        key: 'name',
        header: 'User',
        sortable: true,
        render: (value, row) => (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
              {value.charAt(0)}
            </div>
            <div>
              <div className="font-medium">{value}</div>
              <div className="text-sm text-muted-foreground">{row.email}</div>
            </div>
          </div>
        ),
      },
      {
        key: 'role',
        header: 'Role',
        sortable: true,
        render: (value) => (
          <Badge variant={value === 'Admin' ? 'default' : 'secondary'}>
            {value}
          </Badge>
        ),
      },
      {
        key: 'status',
        header: 'Status',
        sortable: true,
        render: (value) => (
          <div className="flex items-center gap-2">
            <div 
              className={`w-2 h-2 rounded-full ${
                value === 'active' ? 'bg-success' : 
                value === 'inactive' ? 'bg-destructive' : 
                'bg-warning'
              }`}
            />
            <span className="capitalize">{value}</span>
          </div>
        ),
      },
      {
        key: 'joinDate',
        header: 'Joined',
        sortable: true,
        render: (value) => {
          const date = new Date(value);
          const isRecent = Date.now() - date.getTime() < 30 * 24 * 60 * 60 * 1000; // 30 days
          return (
            <div className="text-sm">
              {date.toLocaleDateString()}
              {isRecent && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  New
                </Badge>
              )}
            </div>
          );
        },
      },
    ],
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Advanced example showing custom cell renderers with avatars, status indicators, and conditional badges.',
      },
    },
  },
};

// Performance Example
export const LargeDataset: Story = {
  args: {
    data: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Admin', 'Editor', 'Viewer'][i % 3],
      status: ['active', 'inactive', 'pending'][i % 3] as 'active' | 'inactive' | 'pending',
      joinDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    })),
    columns: userColumns,
    selectable: true,
    stickyHeader: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Performance test with 50 rows of data. The table handles large datasets efficiently with sticky headers and selection.',
      },
    },
  },
};

// Accessibility Demo
export const AccessibilityFeatures: Story = {
  args: {
    data: sampleUsers.slice(0, 3),
    columns: userColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
## Accessibility Testing

This example demonstrates the accessibility features:

- **Keyboard Navigation**: Use Tab to navigate, Space to select
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Sort Indicators**: Visual and programmatic feedback
- **Selection State**: Clear indication of selected rows
- **Focus Management**: Visible focus indicators

### Keyboard Shortcuts
- \`Tab\` / \`Shift+Tab\`: Navigate between interactive elements
- \`Space\`: Toggle row selection
- \`Enter\`: Sort column (when header focused)
        `,
      },
    },
  },
};
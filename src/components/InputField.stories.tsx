import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InputField } from './InputField';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## InputField Component

A flexible, accessible input component with validation states, multiple variants, and interactive features.

### Key Features
- **Multiple Variants**: filled, outlined, ghost
- **Size Options**: small, medium, large
- **Validation States**: default, valid, invalid
- **Interactive Elements**: clear button, password toggle, loading state
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Theme Support**: Light and dark theme compatible

### Use Cases
- Form inputs with validation
- Search fields with clear functionality
- Password fields with visibility toggle
- Loading states for async operations
- Different visual styles for various contexts
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost'],
      description: 'Visual style variant of the input',
      table: {
        type: { summary: "'filled' | 'outlined' | 'ghost'" },
        defaultValue: { summary: 'outlined' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'valid', 'invalid'],
      description: 'Visual state of the input',
      table: {
        type: { summary: "'default' | 'valid' | 'invalid'" },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Shows loading spinner',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'Shows clear button when input has value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    showPasswordToggle: {
      control: { type: 'boolean' },
      description: 'Shows password visibility toggle',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Marks field as required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic InputField
export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    helperText: 'We\'ll never share your email with anyone else.',
  },
};

// Variants Showcase
export const Variants: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-lg font-semibold mb-4">Input Variants</h3>
        <div className="space-y-4">
          <InputField
            label="Filled Variant"
            placeholder="This is a filled input"
            variant="filled"
            helperText="Filled variant with background color"
          />
          <InputField
            label="Outlined Variant"
            placeholder="This is an outlined input"
            variant="outlined"
            helperText="Outlined variant with border"
          />
          <InputField
            label="Ghost Variant"
            placeholder="This is a ghost input"
            variant="ghost"
            helperText="Ghost variant with minimal styling"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the three visual variants: filled, outlined, and ghost. Each variant has distinct styling while maintaining consistent behavior.',
      },
    },
  },
};

// Sizes Showcase
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-lg font-semibold mb-4">Input Sizes</h3>
        <div className="space-y-4">
          <InputField
            label="Small Size"
            placeholder="Small input"
            size="sm"
            helperText="Compact size for dense layouts"
          />
          <InputField
            label="Medium Size"
            placeholder="Medium input"
            size="md"
            helperText="Default size for most use cases"
          />
          <InputField
            label="Large Size"
            placeholder="Large input"
            size="lg"
            helperText="Prominent size for important fields"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows the three available sizes: small (sm), medium (md), and large (lg). Each size maintains proper proportions and touch targets.',
      },
    },
  },
};

// States Showcase
export const States: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-lg font-semibold mb-4">Input States</h3>
        <div className="space-y-4">
          <InputField
            label="Default State"
            placeholder="Normal input field"
            helperText="Default state with no special styling"
          />
          <InputField
            label="Valid State"
            placeholder="Valid input"
            state="valid"
            helperText="Green styling for successful validation"
          />
          <InputField
            label="Invalid State"
            placeholder="Invalid input"
            errorMessage="This field is required"
          />
          <InputField
            label="Disabled State"
            placeholder="Disabled input"
            disabled
            helperText="Cannot be interacted with"
          />
          <InputField
            label="Loading State"
            placeholder="Loading..."
            loading
            helperText="Shows spinner during async operations"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates various input states including default, valid, invalid, disabled, and loading. Each state provides clear visual feedback.',
      },
    },
  },
};

// Interactive Features
export const InteractiveFeatures: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    return (
      <div className="space-y-6 w-96">
        <div>
          <h3 className="text-lg font-semibold mb-4">Interactive Features</h3>
          <div className="space-y-4">
            <InputField
              label="Clearable Input"
              placeholder="Type something to see clear button"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              clearable
              onClear={() => setValue('')}
              helperText="Click the X button to clear the input"
            />
            <InputField
              label="Password with Toggle"
              type="password"
              placeholder="Enter your password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              showPasswordToggle
              helperText="Click the eye icon to toggle password visibility"
            />
            <InputField
              label="Required Field"
              placeholder="This field is required"
              required
              helperText="Required fields are marked with a red asterisk (*)"
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows interactive features like clear button, password visibility toggle, and required field indicators. These enhance user experience and form usability.',
      },
    },
  },
};

// Real-world Examples
export const RealWorldExamples: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [search, setSearch] = useState('');

    return (
      <div className="space-y-8 w-96">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Login Form
            </CardTitle>
            <CardDescription>
              Example of a typical login form with validation states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <InputField
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              helperText="We'll use this for account recovery"
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle
              required
              helperText="Must be at least 8 characters"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              Search Interface
            </CardTitle>
            <CardDescription>
              Search field with clear functionality and loading state
            </CardDescription>
          </CardHeader>
          <CardContent>
            <InputField
              label="Search"
              placeholder="Search for anything..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              clearable
              onClear={() => setSearch('')}
              helperText="Type to search, click X to clear"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              Error Handling
            </CardTitle>
            <CardDescription>
              Demonstrates error states and validation feedback
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <InputField
              label="Username"
              placeholder="Choose a username"
              errorMessage="Username must be at least 3 characters long"
              helperText="This will be your public display name"
            />
            <InputField
              label="Phone Number"
              placeholder="+1 (555) 123-4567"
              errorMessage="Please enter a valid phone number"
            />
          </CardContent>
        </Card>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing how InputField can be used in common scenarios like login forms, search interfaces, and error handling.',
      },
    },
  },
};

// Accessibility Demo
export const Accessibility: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-lg font-semibold mb-4">Accessibility Features</h3>
        <div className="space-y-4">
          <InputField
            label="Screen Reader Friendly"
            placeholder="This input is accessible"
            helperText="Proper ARIA labels and descriptions"
            aria-describedby="accessibility-help"
          />
          <div id="accessibility-help" className="text-xs text-muted-foreground">
            This helper text is properly associated with the input for screen readers.
          </div>
          
          <InputField
            label="Keyboard Navigation"
            placeholder="Try tabbing to this input"
            helperText="Supports keyboard navigation and focus management"
          />
          
          <InputField
            label="High Contrast"
            placeholder="Visible in all color schemes"
            helperText="Maintains contrast in light and dark themes"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates accessibility features including proper ARIA labels, keyboard navigation support, and high contrast visibility.',
      },
    },
  },
};

// Best Practices
export const BestPractices: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-lg font-semibold mb-4">Best Practices & Guidelines</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-green-600 mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Do's
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Always provide descriptive labels</li>
              <li>• Use helper text for additional context</li>
              <li>• Implement proper error handling</li>
              <li>• Ensure keyboard navigation works</li>
              <li>• Use appropriate input types</li>
              <li>• Provide clear validation feedback</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-red-600 mb-2 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Don'ts
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Don't use placeholder as label replacement</li>
              <li>• Avoid generic error messages</li>
              <li>• Don't disable without explanation</li>
              <li>• Avoid excessive validation on every keystroke</li>
              <li>• Don't use unclear helper text</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-blue-600 mb-2 flex items-center gap-2">
              <Info className="h-4 w-4" />
              Accessibility Notes
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Proper ARIA roles and labels</li>
              <li>• Keyboard navigation support</li>
              <li>• Screen reader compatibility</li>
              <li>• High contrast support</li>
              <li>• Focus management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Guidelines and best practices for using InputField effectively, including accessibility considerations and common pitfalls to avoid.',
      },
    },
  },
};

// Playground
export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-96">
        <InputField
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="mt-4 p-3 bg-muted rounded-md">
          <p className="text-sm text-muted-foreground">
            <strong>Current value:</strong> {value || '(empty)'}
          </p>
        </div>
      </div>
    );
  },
  args: {
    label: 'Playground Input',
    placeholder: 'Try different props in the controls panel',
    helperText: 'Use the controls below to experiment with different configurations',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground where you can experiment with different props and see how they affect the InputField component.',
      },
    },
  },
};
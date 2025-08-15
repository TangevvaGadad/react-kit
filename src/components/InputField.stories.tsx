import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# InputField Component

A flexible input component with validation states, variants, and interactive features.

## Features

- **Multiple Variants**: \`filled\`, \`outlined\`, \`ghost\`
- **Size Options**: \`sm\`, \`md\`, \`lg\`
- **State Management**: \`default\`, \`invalid\`, \`valid\`
- **Interactive Elements**: Clear button, password toggle
- **Loading State**: Built-in spinner
- **Accessibility**: ARIA attributes, keyboard navigation, focus management

## Anatomy

The InputField component consists of:
- Label (optional, with required indicator)
- Input field with configurable styling
- Helper text or error message
- Interactive icons (clear, password toggle, loading spinner)

## Best Practices

### Do's
- Use descriptive labels and placeholder text
- Provide helpful error messages
- Use appropriate input types (\`email\`, \`password\`, etc.)
- Include helper text for complex fields

### Don'ts
- Don't use placeholder text as the only label
- Avoid overly long labels or helper text
- Don't disable inputs without clear indication
- Avoid using red borders for non-error states
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
      description: 'Visual style variant of the input field',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    state: {
      control: 'select',
      options: ['default', 'invalid', 'valid'],
      description: 'Validation state of the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search'],
      description: 'HTML input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value',
    },
    showPasswordToggle: {
      control: 'boolean',
      description: 'Show password visibility toggle (only for password type)',
    },
    required: {
      control: 'boolean',
      description: 'Mark field as required',
    },
  },
  args: {
    onChange: () => {},
    onClear: () => {},
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    label: 'Default Input',
    placeholder: 'Enter some text',
    helperText: 'This is a helper text',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Input with Value',
    value: 'Pre-filled value',
    clearable: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    helperText: 'Please fill out this field',
  },
};

// Variants
export const Filled: Story = {
  args: {
    label: 'Filled Variant',
    placeholder: 'Filled background',
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Variant',
    placeholder: 'With border',
    variant: 'outlined',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost Variant',
    placeholder: 'Minimal styling',
    variant: 'ghost',
  },
};

// Sizes
export const SmallSize: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size (default)',
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'lg',
  },
};

// States
export const ValidState: Story = {
  args: {
    label: 'Valid Input',
    value: 'valid@example.com',
    state: 'valid',
    helperText: 'Email format is correct',
  },
};

export const InvalidState: Story = {
  args: {
    label: 'Invalid Input',
    value: 'invalid-email',
    errorMessage: 'Please enter a valid email address',
  },
};

export const LoadingState: Story = {
  args: {
    label: 'Loading Input',
    placeholder: 'Validating...',
    loading: true,
  },
};

export const DisabledState: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
    helperText: 'This field is disabled',
  },
};

// Interactive Features
export const WithClearButton: Story = {
  args: {
    label: 'Clearable Input',
    value: 'Text with clear button',
    clearable: true,
    helperText: 'Click the X to clear',
  },
};

export const PasswordToggle: Story = {
  args: {
    label: 'Password',
    type: 'password',
    value: 'secretpassword',
    showPasswordToggle: true,
    helperText: 'Click the eye icon to toggle visibility',
  },
};

export const PasswordWithClear: Story = {
  args: {
    label: 'Password with Clear',
    type: 'password',
    value: 'password123',
    showPasswordToggle: true,
    clearable: true,
  },
};

// Input Types
export const EmailInput: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'user@example.com',
    variant: 'filled',
  },
};

export const SearchInput: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search for something...',
    variant: 'ghost',
    clearable: true,
  },
};

export const TelephoneInput: Story = {
  args: {
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+1 (555) 123-4567',
    helperText: 'Include country code',
  },
};

// Complex Examples
export const FormField: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    helperText: 'Must be 3-20 characters, letters and numbers only',
    required: true,
    size: 'md',
    variant: 'outlined',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete form field with all accessibility features.',
      },
    },
  },
};

// Accessibility Demo
export const AccessibilityFeatures: Story = {
  args: {
    id: 'accessible-input',
    label: 'Accessible Input Example',
    placeholder: 'Focus and navigate with keyboard',
    helperText: 'This field demonstrates accessibility features',
    'aria-describedby': 'input-help',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
## Accessibility Features

This example demonstrates the accessibility features of the InputField:

- **Keyboard Navigation**: Tab to focus, Enter to submit
- **ARIA Attributes**: Proper labeling and descriptions
- **Focus Management**: Clear focus indicators
- **Screen Reader Support**: Descriptive labels and error messages
- **Required Indicator**: Visual and programmatic indication
        `,
      },
    },
  },
};
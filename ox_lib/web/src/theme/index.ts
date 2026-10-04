import { MantineThemeOverride } from '@mantine/core';

const inputStyles = () => ({
  input: {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: 12,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-family)',
    transition: 'border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': { backgroundColor: 'var(--bg-card-hover)' },
    '&:focus, &:focus-within': { borderColor: 'rgba(255, 255, 255, 0.3)', backgroundColor: 'var(--bg-card-hover)' },
    '&::placeholder': { color: 'var(--text-dark)' },
    '&:disabled': { opacity: 0.5 },
  },
  label: {
    color: 'var(--text-primary)',
    fontWeight: 500,
    fontSize: 13,
    marginBottom: 4,
  },
  description: {
    color: 'var(--text-secondary)',
    fontSize: 12,
    marginBottom: 6,
  },
  required: { color: 'var(--danger)' },
  icon: { color: 'var(--text-secondary)' },
  dropdown: {
    backgroundColor: 'var(--bg-main)',
    border: '1px solid var(--border-color-strong)',
    borderRadius: 12,
    padding: 4,
  },
  item: {
    borderRadius: 8,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-family)',
    '&[data-hovered]': { backgroundColor: 'var(--bg-card-hover)' },
    '&[data-selected], &[data-selected]:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      color: 'var(--text-primary)',
    },
  },
  value: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: 'var(--text-primary)',
    borderRadius: 8,
  },
});

const inputComponents = [
  'TextInput',
  'PasswordInput',
  'NumberInput',
  'Textarea',
  'Select',
  'MultiSelect',
  'ColorInput',
  'DatePicker',
  'DateRangePicker',
  'TimeInput',
].reduce((acc, name) => ({ ...acc, [name]: { styles: inputStyles } }), {});

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Rubik, sans-serif',
  fontFamilyMonospace: 'Rubik, sans-serif',
  primaryColor: 'ec',
  primaryShade: 6,
  defaultRadius: 'md',
  radius: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
  shadows: {
    sm: '0 4px 14px rgba(0, 0, 0, 0.45)',
    md: '0 8px 28px rgba(0, 0, 0, 0.5)',
    lg: '0 16px 48px rgba(0, 0, 0, 0.55)',
  },
  colors: {
    dark: [
      '#ffffff',
      '#d4d4d4',
      '#8a8a8a',
      '#5c5c5c',
      '#2a2a2a',
      '#232323',
      '#1c1c1c',
      '#16171a',
      '#131313',
      '#0a0a0a',
    ],
    ec: [
      '#fafafa',
      '#f0f0f0',
      '#e5e5e5',
      '#d4d4d4',
      '#c4c4c4',
      '#b0b0b0',
      '#ffffff',
      '#e8e8e8',
      '#d0d0d0',
      '#b8b8b8',
    ],
  },
  components: {
    ...inputComponents,
    Button: {
      defaultProps: { radius: 'md' },
      styles: (_theme, params: any) => ({
        root: {
          fontFamily: 'var(--font-family)',
          fontWeight: 600,
          letterSpacing: 0.3,
          border: '1px solid var(--border-color)',
          borderRadius: 12,
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          ...(params.variant === 'default' && {
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            '&:hover': { backgroundColor: 'var(--bg-card-hover)', borderColor: 'var(--border-color-strong)' },
          }),
          ...(params.variant === 'light' && {
            backgroundColor: '#ffffff',
            color: '#0a0a0a',
            borderColor: '#ffffff',
            '&:hover': { backgroundColor: '#e8e8e8', borderColor: '#e8e8e8' },
          }),
          '&:active': { transform: 'scale(0.97)' },
          '&:disabled, &[data-disabled]': {
            opacity: 0.45,
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-secondary)',
            borderColor: 'var(--border-color)',
          },
        },
      }),
    },
    Modal: {
      defaultProps: { overlayColor: '#000' },
      styles: () => ({
        modal: {
          backgroundColor: 'var(--bg-main)',
          border: '1px solid var(--border-color)',
          borderRadius: 20,
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.55)',
          padding: '20px !important',
          fontFamily: 'var(--font-family)',
        },
        header: { marginBottom: 14 },
        title: {
          fontWeight: 700,
          fontSize: 18,
          color: 'var(--text-primary)',
        },
      }),
    },
    Tooltip: {
      styles: () => ({
        tooltip: {
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color-strong)',
          color: 'var(--text-secondary)',
          borderRadius: 12,
          fontFamily: 'var(--font-family)',
        },
      }),
    },
    HoverCard: {
      styles: () => ({
        dropdown: {
          backgroundColor: 'var(--bg-main)',
          border: '1px solid var(--border-color-strong)',
          borderRadius: 12,
        },
      }),
    },
    Progress: {
      styles: () => ({
        root: { backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: 999 },
        bar: { borderRadius: 999 },
      }),
    },
    Checkbox: {
      styles: () => ({
        input: {
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color-strong)',
          borderRadius: 6,
          '&:checked': { backgroundColor: '#ffffff', borderColor: '#ffffff' },
        },
        icon: { color: '#0a0a0a' },
        label: { color: 'var(--text-primary)', fontFamily: 'var(--font-family)' },
      }),
    },
    Slider: {
      styles: () => ({
        track: { '&::before': { backgroundColor: 'rgba(255, 255, 255, 0.08)' } },
        bar: { backgroundColor: '#ffffff' },
        thumb: { backgroundColor: '#ffffff', borderColor: '#ffffff' },
        mark: { borderColor: 'rgba(255, 255, 255, 0.2)' },
        markFilled: { borderColor: '#ffffff' },
        markLabel: { color: 'var(--text-secondary)' },
      }),
    },
  },
};

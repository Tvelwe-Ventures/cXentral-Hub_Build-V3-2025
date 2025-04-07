# cXentral Hub Design System

## 1. Brand Foundation

### Logo & Brand Mark
- **Primary Logo**: Full "cXentral" logotype in deep blue (#1A1A6C)
- **Brand Mark**: Standalone "U" symbol in bright blue (#0039FF)
- **Clear Space**: Minimum clear space around logo equals height of "X" character
- **Minimum Size**: Logo should never appear smaller than 120px wide for digital applications

### Brand Promise
cXentral Hub is the composable AI-powered experience orchestration platform that enables organisations to create seamless customer and employee experiences through modular, integrated components.

### Voice & Tone
- **Confident**: Speaks with authority on the subject of CX
- **Precise**: Uses clear, specific language without unnecessary jargon
- **Progressive**: Forward-thinking and innovative
- **Practical**: Always ties features to business outcomes and value
- **Collaborative**: Emphasises partnership and ecosystem thinking

## 2. Colour System

### Primary Palette
- **cXentral Blue**: #0039FF (Brand mark, primary buttons, key highlights)
- **Deep Blue**: #1A1A6C (Logotype, headings, important text)
- **Link Blue**: #2358E9 (Interactive elements, links, secondary CTAs)

### Secondary Palette
- **Purple**: #5E17EB (Platform section, integration elements)
- **Teal**: #14B8A6 (Marketplace section, discovery elements)
- **Amber**: #F59E0B (Ecosystem section, connection elements)
- **Indigo**: #4F46E5 (Development section, technical elements)

### Neutrals
- **Background White**: #FFFFFF (Primary background)
- **Light Grey**: #F8F9FA (Secondary background, inactive states)
- **Mid Grey**: #E5E7EB (Borders, dividers, subtle elements)
- **Text Grey**: #6B7280 (Secondary text, captions)
- **Dark Grey**: #111827 (Primary text)

### Functional Colours
- **Success**: #10B981 (Confirmation, completion)
- **Warning**: #F59E0B (Alerts, warnings)
- **Error**: #EF4444 (Errors, destructive actions)
- **Info**: #3B82F6 (Informational elements)

### Dark Mode Variants
- **Dark Background**: #0D0D15 (Primary background)
- **Dark Surface**: #1A1A24 (Cards, elevated surfaces)
- **Dark Border**: #303048 (Separators, subtle borders)
- **Dark Text**: #E5E7EB (Primary text)
- **Dark Text Secondary**: #9CA3AF (Secondary text)

## 3. Typography

### Font Family
- **Primary Font**: Inter (Weights: 400 Regular, 500 Medium, 600 Semibold, 700 Bold)
- **Monospace Font**: JetBrains Mono (For code snippets, technical specifications)

### Type Scale
Based on 8px grid with modular scaling:
- **xs**: 12px/16px (Caption, fine print)
- **sm**: 14px/20px (Small body text, UI elements)
- **base**: 16px/24px (Body text)
- **lg**: 18px/28px (Large body text)
- **xl**: 20px/32px (Subheadings)
- **2xl**: 24px/36px (Section headings)
- **3xl**: 30px/40px (Page headings)
- **4xl**: 36px/44px (Major headings)
- **5xl**: 48px/52px (Hero headings)

### Type Treatments
- **Headings**: Deep Blue (#1A1A6C), Semibold (600)
- **Body**: Dark Grey (#111827), Regular (400)
- **Links**: Link Blue (#2358E9), Medium (500)
- **Emphasis**: Dark Grey (#111827), Medium (500)
- **Buttons**: Medium (500) for size base and above, Semibold (600) for smaller sizes
- **Captions**: Text Grey (#6B7280), Regular (400)
- **Code**: JetBrains Mono, Regular (400)

## 4. Spacing System

### Base Grid
All spacing follows an 8px grid system:
- **0**: 0px
- **1**: 4px (Half grid unit for fine adjustments)
- **2**: 8px (Base unit - tight spacing)
- **3**: 12px
- **4**: 16px (Form elements, compact spacing)
- **5**: 20px
- **6**: 24px (Standard spacing)
- **8**: 32px (Loose spacing)
- **10**: 40px (Section spacing)
- **12**: 48px
- **16**: 64px (Large section spacing)
- **20**: 80px (Major sections, page breaks)
- **24**: 96px (Hero sections)

### Component Spacing
- **Container Padding**: 16px (sm), 24px (md), 32px (lg)
- **Card Padding**: 16px (compact), 24px (standard)
- **Form Element Spacing**: 24px between groups, 12px between related elements
- **Button Padding**: 8px 16px (sm), 12px 20px (md), 16px 24px (lg)

## 5. Component Library

### Core Elements

#### Buttons
- **Primary**: cXentral Blue background, white text, 4px border radius
- **Secondary**: White background, Link Blue border and text
- **Tertiary**: No background/border, Link Blue text
- **Ghost**: No background/border, Text Grey text
- **Sizes**: sm (h-8), md (h-10), lg (h-12)
- **States**: default, hover, active, focused, disabled

#### Form Elements
- **Text Input**: 4px border radius, Mid Grey border, 100% width by default
- **Select**: Custom dropdown with subtle animation
- **Checkbox/Radio**: Custom styled with brand colours
- **Toggle**: Pill-shaped with smooth animation
- **Form Validation**: Clear error messages with Error colour
- **States**: default, hover, focus, filled, error, disabled

#### Cards
- **Default**: White background, subtle shadow, 8px border radius
- **Interactive**: Hover state with elevation increase
- **Featured**: Accent colour subtle border
- **Sizes**: compact (less padding), standard, expanded (more padding)

#### Badges & Tags
- **Default**: Light Grey background, Text Grey text
- **Coloured**: Lighter version of semantic colours with matching text
- **Sizes**: sm (h-5), md (h-6)
- **Variants**: pill (rounded), square (4px radius)

### Compound Components

#### Navigation
- **Main Navigation**: Horizontal bar with dropdown menus
- **Sidebar**: Collapsible with icon and text labels
- **Tabbed Interface**: Underline style active indicator
- **Breadcrumbs**: Subtle separators, truncation on overflow

#### Data Display
- **Tables**: Clean lines, zebra striping optional
- **Data Cards**: Structured information display with semantic grouping
- **Stats**: Large numeric displays with supporting text
- **Progress Indicators**: Linear and circular variants

#### Feedback
- **Alerts**: Colour-coded by type with optional icon
- **Toasts**: Temporary notifications that auto-dismiss
- **Modals**: Centred with overlay background, focus trapping
- **Popovers**: Context-sensitive information bubbles

#### Charts & Visualisations
- **Line Charts**: Smooth curves with consistent palette
- **Bar Charts**: Consistent colour usage with subtle patterns
- **Pie/Donut Charts**: Limited segments for clarity
- **Data Flow Visualisations**: Animated paths showing integration

## 6. Layout System

### Grid System
- **12-column grid**: Flexible for responsive layouts
- **Gutters**: 16px (sm), 24px (md), 32px (lg)
- **Margins**: 16px (sm), 32px (md), 64px (lg and above)

### Breakpoints
- **xs**: 0px (Default mobile)
- **sm**: 640px (Small tablets, large phones)
- **md**: 768px (Tablets)
- **lg**: 1024px (Small desktops, landscape tablets)
- **xl**: 1280px (Desktops)
- **2xl**: 1536px (Large desktops)

### Container Sizes
- **sm**: Max-width 640px
- **md**: Max-width 768px
- **lg**: Max-width 1024px
- **xl**: Max-width 1280px
- **2xl**: Max-width 1536px
- **full**: 100% width

### Page Templates
- **Marketing Page**: Hero section, alternating content blocks
- **Dashboard**: Sidebar navigation, content area with cards
- **Documentation**: Persistent left nav, content with right TOC
- **Marketplace**: Grid layout with filters sidebar

## 7. Motion & Interaction

### Timing Functions
- **Default**: cubic-bezier(0.16, 1, 0.3, 1) - Ease out quint
- **Enter**: cubic-bezier(0.22, 1, 0.36, 1) - Emphasis on end
- **Exit**: cubic-bezier(0.3, 0, 0.8, 0.15) - Quick start, slow end

### Duration
- **Fast**: 100ms (Micro-interactions)
- **Default**: 150ms (Most UI interactions)
- **Medium**: 250ms (Panel transitions, modals)
- **Slow**: 400ms (Page transitions, complex animations)

### Interaction Patterns
- **Hover Effects**: Subtle scaling (1.01-1.03) or elevation changes
- **Transitions**: Elements fade and move slightly (8px max)
- **Loading States**: Skeleton loaders with subtle animation
- **Button Feedback**: Subtle depression effect on click

### Animation Patterns
- **Data Flow**: Particles moving along paths with varying speeds
- **State Changes**: Smooth transitions between UI states
- **Loaders**: Branded loading animations using the "U" mark
- **Micro-interactions**: Subtle movements that indicate interactivity

## 8. Iconography

### Icon System
- **Style**: Outlined with 1.5px stroke, rounded caps
- **Grid**: 24x24 with 1px padding for touch targets
- **Consistency**: All icons follow same stylistic approach
- **Sizing**: 16px (compact UI), 20px (standard), 24px (emphasis)

### Icon Categories
- **UI Icons**: Navigation, actions, form controls
- **Object Icons**: Files, documents, tools
- **Platform Icons**: Specific to cXentral Hub features
- **Integration Icons**: Vendor and system connectors

### Icon Usage
- **Primary Navigation**: Icon + text for clarity
- **Buttons**: Optional leading or trailing icons
- **Feature Highlighting**: Larger coloured icons for marketing
- **Status Indicators**: Small coloured icons for feedback

## 9. Accessibility

### Colour Contrast
- **Text**: Minimum 4.5:1 for body text, 3:1 for large text
- **Interactive Elements**: Minimum 3:1 against backgrounds
- **Focus States**: High contrast focus indicators

### Keyboard Navigation
- **Focus Order**: Logical tab order through interface
- **Focus Indicators**: Visible for all interactive elements
- **Keyboard Shortcuts**: For power users where appropriate

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Attributes**: When native semantics insufficient
- **Alternative Text**: For all non-decorative images

### Inclusive Design
- **Text Sizing**: Supports browser zoom and text scaling
- **Reduced Motion**: Alternative animations for vestibular issues
- **Colour Independence**: Patterns/icons supplement colour coding

## 10. Design Tokens

### Implementation
All design values are defined as tokens for consistent implementation across platforms:
- CSS variables for web applications
- Swift/Kotlin values for native applications
- Figma variables for design files

### Naming Convention
```
cxentral-[category]-[property]-[variant]-[state]
```

Example:
```
cxentral-color-primary-500
cxentral-spacing-container-lg
cxentral-typography-heading-xl
```

### Distribution
Design tokens are distributed via:
- NPM package for web developers
- Design token JSON for cross-platform consistency
- Figma library for designers

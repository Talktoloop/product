# Intents

Intents are a helpful part of the Relativistic UI design system that helps define how components should behave, present themselves, and interact with users. The system is built around four key aspects of component intention:

## Arrangement Intents

Components can specify how they arrange their content through one of four options:

- Compare: Layouts that facilitate comparison between items
- Sequence: Content arranged in a specific order or flow
- Relate: Content that shows relationships between items
- Focus: Layouts that emphasize a single item or concept

## Presentation Intents

How content should be displayed is defined through these options:

- Summarize: Show condensed or overview information
- Detail: Present comprehensive information
- Highlight: Emphasize specific aspects
- Group: Organize related content together

## Interaction Intents

The way users interact with components can be:

- Engage: Primary interaction patterns
- Support: Secondary or supporting interactions
- Act: Direct action-oriented interactions

## Affordance Categories

Components can declare what they allow users to do through three main categories:

1. Consume affordances:
   - View: For reading or observing content
   - Browse: For exploring or scanning content
2. Input affordances:
   - Select: For choosing from options
   - Enter: For providing new information
   - Modify: For changing existing content
3. Action affordances:
   - Trigger: For initiating processes
   - Navigate: For moving between views

Each intent can be declared through the component variant system. The framework uses these declarations to automatically apply appropriate behaviors, accessibility features, and styling based on the declared intents.

This system helps maintain consistency across the application while allowing components to adapt to different contexts and user needs. It's particularly powerful when combined with other Nuxt Gravity features like frames of reference and principles.

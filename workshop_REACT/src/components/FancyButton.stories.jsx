import FancyButton from './FancyButton';

export default {
  title: 'Components/FancyButton',
  component: FancyButton,
  args: {
    children: 'Buton Demo',
  },
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '220px',
        padding: '2rem'
      }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['primary', 'outline', 'ghost'] },
    size: { control: { type: 'radio' }, options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' }
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'FancyButton – buton reutilizabil cu variante (primary / outline / ghost), dimensiuni (sm / md / lg) și suport pentru starea de loading. Folosește-l pentru acțiuni primare sau secundare în interfață.'
      }
    }
  }
};

export const Primary = {
  parameters: {
    docs: { description: { story: 'Varianta implicită accentuată pentru acțiunea principală.' } }
  },
};

export const Outline = {
  args: { variant: 'outline' },
  parameters: {
    docs: { description: { story: 'Varianta outline – mai discretă, potrivită pentru acțiuni secundare.' } }
  }
};

export const Ghost = {
  args: { variant: 'ghost' },
  parameters: {
    docs: { description: { story: 'Varianta ghost – fără border, ideală în zone cu densitate mare de UI.' } }
  }
};

export const LargeLoading = {
  args: { size: 'lg', loading: true, children: 'Se incarca...' },
  parameters: {
    docs: { description: { story: 'Exemplu de buton mare în stare de încărcare (loading spinner + disabled).' } }
  }
};

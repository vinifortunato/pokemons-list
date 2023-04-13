import Heart from './Heart';

export default {
  title: 'Components/Heart',
  component: Heart,
  tags: ['autodocs'],
  argTypes: {
		selected: {
			control: 'boolean'
		},
		testId: {
			control: 'text',
			defaultValue: 'heart-1'
		},
		onClick: {
			action: 'onClick'
		}
  },
};

const Wrapper = (args) => (
	<div className='heart-storybook-wrapper'>
		<Heart {...args} />
	</div>
);

export const Default = Wrapper.bind({
  args: {
		selected: false,
		testId: 'heart'
  },
});



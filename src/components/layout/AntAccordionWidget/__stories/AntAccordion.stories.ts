import AntAccordionWidget from '../AntAccordionWidget.vue';
import AntAccordionItem from '../AntAccordionItem.vue';

export default {
  title: 'Components/Layout/Ant Accordion',
  component: AntAccordionWidget,
  subComponent: AntAccordionItem,
};

const Template = (args: any) => ({
  components: { AntAccordionWidget, AntAccordionItem },
  setup() {
    return { args };
  },
  template: `<div class="max-w-sm w-screen h-screen">
    <AntAccordionWidget v-bind="args" class=" border-l border-r">
      <AntAccordionItem label="Template">
        <div>One</div>
      </AntAccordionItem>

      <AntAccordionItem label="Fields">
        <div>Two</div>
      </AntAccordionItem>
    </AntAccordionWidget>
  </div>`,
});

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {};

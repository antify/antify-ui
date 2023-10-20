import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../../enums/Size.enum';
import AntUnitInput from "../AntUnitInput.vue";
import {computed} from 'vue';
import {ColorType} from "../../../enums/ColorType.enum";
import {faEuroSign} from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof AntUnitInput> = {
    title: 'Components/Forms/Ant Unit Input',
    component: AntUnitInput,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        args: {
            description:
                'Additional attributes will be forwarded to the input directly. This way you can access the default input events.',
        },
        unit: {
            control: 'text',
            description:
                'Will be displayed right to the input.<br>Use text or Font-awesome Icons.',
            table: {type: {summary: 'string|IconDefinition'}},
        },
        colorType: {
            control: {type: 'select'},
            options: Object.values(ColorType),
            table: {defaultValue: {summary: ColorType.neutral}},
        },
        size: {
            control: {type: 'radio'},
            options: Object.values(Size),
            table: {defaultValue: {summary: Size.md}},
        },
        placeholder: {
            table: {defaultValue: {summary: 'this.label'}},
        },
        wrapperClass: {
            control: 'text',
            description:
                'Class for the first element because the attribute "class" would affect the input element.',
            table: {type: {summary: 'string|object'}},
        },
    },
};

export default meta;

type Story = StoryObj<typeof AntUnitInput>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntUnitInput},
        setup() {
            const value = computed({
                get() {
                    return args.value;
                },
                set(val) {
                    args.value = val;
                }
            })

            return {args, value};
        },
        template: '<div class="p-4"><AntUnitInput v-bind="args" v-model:value="value" /></div>',
    }),
    args: {
        value: 0,
        unit: '€',
        label: 'Label',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
    },
};

export const UnitAsIcon: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        unit: faEuroSign,
    },
};

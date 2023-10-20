import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../../enums/Size.enum';
import AntNumberInput from "../AntNumberInput.vue";
import {computed} from 'vue';
import {ColorType} from "../../../enums/ColorType.enum";
import {useValidator} from "@antify/validate";

const meta: Meta<typeof AntNumberInput> = {
    title: 'Components/Forms/Ant Number Input',
    component: AntNumberInput,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        args: {
            description:
                'Additional attributes will be forwarded to the input directly. This way you can access the default input events.',
        },
        value: {
            control: {type: 'number'},
            table: {type: {summary: 'number|null'}},
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
        }
    },
};

export default meta;

type Story = StoryObj<typeof AntNumberInput>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntNumberInput},
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
        template: '<div class="p-4"><AntNumberInput v-bind="args" v-model:value="value" /></div>',
    }),
    args: {
        value: 0,
        steps: 1,
        label: 'Label',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
    },
};

export const withValidator: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        validator: useValidator([
            (val: number) => val < 4 || 'Value should not be bigger than 4',
            (val: number) => val < 5 || 'Value should really not be bigger than 4!'
        ])
    },
};

export const limited: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        value: 50,
        limiter: true,
        max: 10,
        validator: useValidator([
            (val: number) => val <= 10 || 'Value should not be bigger than 10',
            (val: number) => val <= 11 || 'It should be really not bigger than 10!!!!'
        ])
    },
};

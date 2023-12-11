import { InputColorType } from '../../../../enums';
import { Validator } from '@antify/validate';

export type AntRadioType = {
  value: string;
  label?: string;
  disabled?: boolean;
  readonly?: boolean;
  colorType?: InputColorType;
  validator?: Validator;

  [key: string]: unknown;
}

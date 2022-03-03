export interface IQuestion {
  type: string;
  question: string;
  badge?: string;
  is_required?: boolean;
  id: string;
  stt:number;
}

export interface ITextQuestion extends IQuestion {}

export interface ISelectionQuestion extends IQuestion {
  answers?: string[];
  multi_select?: boolean;
  inline?: boolean;
  other?: IOther;
}

export interface IMatrixQuestion extends IQuestion {
  values?: string[];
  answers?: string[];
}

export interface INPSQuestion extends IQuestion {
  scale?: number[];
  min?: string;
  max?: string;
}

export interface IRattingQuestion extends IQuestion {
  value?: number;
  min?: string;
  max?: string;
}

export interface IOther {
  is_other?: boolean;
  value?: string;
  label?: string;
}

export interface IBlock {
  id: string;
  type: string;
  question: string;
  answers: string[] | undefined;
  multiSelect: boolean | undefined;
  inline: boolean | undefined;
  other: IOther | undefined;
  isRequired: boolean | undefined;
  values: string[] | undefined;
  scale: number[] | undefined;
  min: string | undefined;
  max: string | undefined;
  value: number | undefined;
}

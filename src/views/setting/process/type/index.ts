export interface ISteps {
  stepId: number
  executor: string
  stepDesc: string
  stepName: string
  executorId: string
  executiveDepartment: string
}

export interface IProcessList {
  id: number
  used: number
  processName: string
  steps: ISteps[]
}

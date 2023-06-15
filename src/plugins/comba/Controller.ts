import combaModel from './Model'

export const doNextProcess = (data: any) => {
  combaModel.data.compIndex += 1
  if (combaModel.data.compIndex >= 4) return
  
}
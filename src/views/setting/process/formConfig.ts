export const useFormConfig = () => {
  const departmentList = [
    { departmentName: '技术部' },
    { departmentName: '财务部' },
    { departmentName: '人力资源部' },
  ].map((i) => {
    return { label: i.departmentName, value: i.departmentName }
  })

  const stepParams = [
    {
      label: '车牌号',
      value: '',
    },
    {
      label: '司机',
      value: '',
    },
    {
      label: '手续状态',
      value: '',
    },
    {
      label: '开票抬头',
      value: '',
    },
    {
      label: '开票金额',
      value: '',
    },
    {
      label: '结清',
      value: '',
    },
    {
      label: '备注',
      value: '',
    },
  ]
  return [
    {
      id: 1,
      label: '流程名称',
      prop: 'processName',
      component: 'input',
      type: 'text',
    },
    {
      id: 2,
      label: '步骤名',
      prop: 'stepName',
      component: 'input',
      type: 'text',
    },
    {
      id: 3,
      label: '步骤描述',
      prop: 'stepDesc',
      component: 'input',
      type: 'text',
    },
    {
      id: 4,
      label: '执行部门',
      prop: 'executiveDepartment',
      component: 'select',
      type: 'text',
      style: 'width: 100%',
      data: departmentList,
    },
    {
      id: 5,
      label: '步骤执行人',
      prop: 'executor',
      component: 'search',
      placeholder: '请输入姓名',
      style: 'width: 100%',
    },
    {
      id: 6,
      label: '参数',
      prop: 'params',
      component: 'select',
      placeholder: '请输入参数',
      style: 'width: 100%',
      data: stepParams,
    },
    {
      id: 7,
      component: 'button',
      type: 'primary',
      text: '添加步骤',
    },
  ]
}

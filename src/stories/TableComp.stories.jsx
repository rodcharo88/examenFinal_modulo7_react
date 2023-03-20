import { TableComp } from './TableComp';

export default {
  title: 'Example/TableComp',
  component: TableComp,
}; 

const Template = (args) => <TableComp {...args} />;

export const Constructor = Template.bind({});
Constructor.args = {
  filas: 0,
  columnas: 0,
  headers: [],
};





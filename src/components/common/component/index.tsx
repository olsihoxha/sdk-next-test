import Title from './Title';
import AppProvider from '../context/AppContext/AppProvider';
import ThemeProvider from '../context/ThemeContext/ThemeProvider';

import { JSXInternal } from 'preact/src/jsx';

function CommonComponents({ styles }) {
  type ComponentListProps = {
    name: string;
    component: JSXInternal.Element;
  }[];

  const components: ComponentListProps = [
    {
      name: 'Title',
      component: <Title title="Sample Title" />,
    },
  ];

  return (
    <AppProvider>
      <ThemeProvider styles={styles}>
        {components.map((component, index) => (
          <div className="mb-8 mt-4" key={`component-${index}`}>
            <div className="flex justify-between items-center">
              <h2 className="text-bold text-primary whitespace-nowrap	uppercase mb-4">
                {component.name}
              </h2>
              <div className="border-t border-primary p-1 w-full ml-4" />
            </div>
            {component.component}
          </div>
        ))}
      </ThemeProvider>
    </AppProvider>
  );
}


export default CommonComponents;

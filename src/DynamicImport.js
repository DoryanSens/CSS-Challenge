  import React, { useState, useEffect, lazy } from 'react';

  const importComponent = (path) =>
    lazy(() =>
      import(`${path}`).catch((err) => {
        return import(`./pages/Error404Page`);
    }),
  );

  const DynamicImport = ({ filePath, ...rest }) => {

    const [module, setModule] = useState(null);
    useEffect(() => {
      const loadComponent = () => {
        const Component = importComponent(`${filePath}`);
        setModule(<Component {...rest} />);
      };
      loadComponent();
    }, [filePath]);

    return<>{module}</>;
  };

  export default DynamicImport;
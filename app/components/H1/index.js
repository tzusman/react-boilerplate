import React from 'react';

import styles from './styles.less';

function H1(props) {
  return (
    <h1 className={styles.heading1} {...props} />
  );
}

export default H1;

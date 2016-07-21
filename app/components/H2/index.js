import React from 'react';

import styles from './styles.less';

function H2(props) {
  return (
    <h2 className={styles.heading2} {...props} />
  );
}

export default H2;

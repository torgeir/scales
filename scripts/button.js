import React from 'react';
import component from 'omniscient';

export default component(function Button ({className, onClick}) {
  return <button className={className} onClick={onClick}>{this.props.children}</button>;
}).jsx;

/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import Article from '../components/Article';
import ChangelogDoc from '!raw-loader!../docs/changelog.md';

const Changelog = () => (
  <React.Fragment>
    <Article
      title="Impact Client - Changelog"
      article={ChangelogDoc}
    />
  </React.Fragment>
);

export default Changelog;

import React from 'react';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import { detailHtml } from '../../Config/requestMock.jsx';

export default class ViewDetail extends React.Component {
    render() {
      return (
        <React.Fragment>
          <MdEditor.HtmlRender  
           html={detailHtml}
          />   
        </React.Fragment>
      );
    }
  }
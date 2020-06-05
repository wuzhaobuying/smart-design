import React from "react";
import { action } from "@storybook/addon-actions";
import { Upload } from "./upload";
//import Button from '../Button/button'
import Icon from "../Icon/icon";

export default {
  component: Upload,
  title: "Upload",
  decorators: [
    (storyFn) => (
      <div style={{ margin: "0 10px", width: "200px" }}>{storyFn()}</div>
    ),
  ],
};

export const simpleUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action("changed")}
      onRemove={action("removed")}
      name="fileName"
      multiple
      drag
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  );
};

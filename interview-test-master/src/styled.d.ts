import styled from "styled-components";

declare module "styled-component" {
  export interface DefaultTheme {
    borderRadius: string;
    backgroundColor: string;
    width;
  }
}

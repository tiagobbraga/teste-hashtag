import styled from 'styled-components/native';
import CommonTextInterface from '../interfaces/CommonTextInterface';
import ContainerViewInterface from '../interfaces/ContainerViewInterface';
import FlexViewInterface from '../interfaces/FlexViewInterface';

export const AvatarImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

export const CardView = styled.View<ContainerViewInterface>`
  padding: ${(props) => (props.padding === undefined ? '0' : `${props.padding}px`)};
  margin: ${(props) => (props.margin === undefined ? '0' : `${props.margin}px`)};
  border-radius: ${(props) => (props.borderRadius === undefined ? '0' : `${props.borderRadius}px`)};
  background: ${(props) => props.backgroundColor};
`;

export const CenterView = styled.View<FlexViewInterface>`
  align-items: ${(props) => (props.alignItems === undefined ? 'center' : props.alignItems)};
  justify-content: ${(props) => (props.justifyContent === undefined ? 'center' : props.justifyContent)};
  flex-direction: ${(props) => (props.flexDirection === undefined ? 'row' : props.flexDirection)};
`;

export const CommonText = styled.Text<CommonTextInterface>`
  font-family: 'Futura';
  text-align: ${(props) => (props.textAlign === undefined ? 'left' : `${props.textAlign}`)};
  color: ${(props) => (props.color === undefined ? 'white' : `${props.color}`)};
  font-size: ${(props) => (props.fontSize === undefined ? '14px' : `${props.fontSize}px`)};
  font-weight: ${(props) => (props.fontWeight === undefined ? '100' : props.fontWeight)};
`;

export const Input = styled.TextInput`
  font-family: 'Futura';
  font-size: 14px;
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
  height: 40px;
  flex: 1px;
  margin-right: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;

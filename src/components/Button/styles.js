import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import {
  $gray500,
  $brandColorPrimary,
  $brandColorSecondary,
} from '../../styles/variables';

const primary = {
  width: '100%',
  height: '56px',
  borderRadius: '100px',
  backgroundColor: $brandColorPrimary,
  color: '#ffffff',
};
const secondary = {
  width: '100%',
  height: '56px',
  borderRadius: '100px',
  backgroundColor: '#ffffff',
  color: `${$brandColorPrimary}`,
  border: `1px solid ${$brandColorPrimary}`,
};

const styledButton = props =>
  props.background === 'primary' ? primary : secondary;
export const ButtonText = withStyles({
  root: styledButton,
})(Button);

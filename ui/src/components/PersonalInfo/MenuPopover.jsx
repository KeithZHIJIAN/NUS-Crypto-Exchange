import PropTypes from 'prop-types';
// material
import { Popover } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import palette from './palette'

// ----------------------------------------------------------------------

const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: palette.background.paper,
    borderRight: `solid 1px ${alpha(palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(palette.grey[500], 0.12)}`
  }
}));

// ----------------------------------------------------------------------

MenuPopover.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object
};

export default function MenuPopover({ children, sx, ...other }) {
  return (
    <Popover
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: 'inherit',
          boxShadow: `0 0 2px 0 ${palette.grey[500_24]}, 0 20px 40px -4px ${palette.grey[500_24]}`,
          border: `solid 1px ${palette.grey[500_8]}`,
          width: 200,
          ...sx
        }
      }}
      {...other}
    >
      <ArrowStyle className="arrow" />

      {children}
    </Popover>
  );
}
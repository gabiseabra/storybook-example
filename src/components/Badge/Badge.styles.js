import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  badge: {
    display: 'inline-block',
    padding: [2, 12],
    margin: [0, 8, 0, 0],
    borderRadius: 4,
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: '#646464',
    backgroundColor: '#f2f2f2',
  },
  '@media (max-width: 575px)': {
    badge: {
      fontSize: '0.625rem',
      marginTop: '0.5rem',
    },
  },
  '@media print': {
    badge: {
      fontSize: '8pt',
      padding: '2px 6px',
      border: '2px solid #eee',
      borderColor: ({ style } = {}) => style?.backgroundColor || 'transparent',
    },
  },
});

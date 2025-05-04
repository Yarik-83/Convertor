import {Typography} from '@mui/material';

export default function MyText(props) {
  const { tag, text, fontW, fontS, color } = props;
  return (
    <Typography
      component={tag}
      sx={{ fontWeight: fontW, fontSize: fontS, color: color }}
    >
      {text}
    </Typography>
  );
}
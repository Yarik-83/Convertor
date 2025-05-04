import Button from "@mui/material/Button";




export default function MakeButton(props) {
    const { text, h, w, bg, color,onClick } = props;
    return (
      <Button
      onClick={onClick}
        variant="outlined"
        sx={{
          "&.MuiButton-root": {
            bgcolor: bg,
            color: color,
          },
          "&.MuiButton-outlined": {
            height: h,
            width: w,
          },
        }}
      >
        {text}
      </Button>
    );
  }
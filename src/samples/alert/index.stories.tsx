import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { styled } from '@mui/material/styles';
import { Meta } from "@storybook/react";
import { Alert, AlertStyle, AlertType } from "../../components/alert";

export const SampleAlert = () => {

  return (
    <Container>
      <AlertContainerStyled>
        <Alert
          text={"This is Success Alert"}
          type={AlertType.Success}
          style={AlertStyle.Fill}
        />
      </AlertContainerStyled>
      <AlertContainerStyled>
        <Alert
          text={"This is Info Alert"}
          type={AlertType.Info}
          style={AlertStyle.Fill}
        />
      </AlertContainerStyled>
      <AlertContainerStyled>
        <Alert
          text={"This is Notice Alert"}
          type={AlertType.Notice}
          style={AlertStyle.Fill}
        />
      </AlertContainerStyled>
      <AlertContainerStyled>
        <Alert
          text={"This is Warning Alert"}
          type={AlertType.Warning}
          style={AlertStyle.Fill}
        />
      </AlertContainerStyled>
      <AlertContainerStyled>
        <Alert
          text={"This is Error Alert"}
          type={AlertType.Error}
          style={AlertStyle.Fill}
        />
      </AlertContainerStyled>
      <AlertContainerStyled>
        <Alert
          text={"This is Success Alert custom elevation"}
          type={AlertType.Success}
          style={AlertStyle.Fill}
          elevation={0}
        />
      </AlertContainerStyled>
      <AlertContainerStyled>
        <Alert
          text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "}
          type={AlertType.Error}
          style={AlertStyle.Fill}
          elevation={0}
        />
      </AlertContainerStyled>
    </Container>
  );
};

export default {
  title: "Sample/Alert",
  component: SampleAlert,
} as Meta<typeof SampleAlert>;

const AlertContainerStyled = styled(Box)(() => ({
  paddingHorizontal: 10,
  paddingInline: 12,
}));

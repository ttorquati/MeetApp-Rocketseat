import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 15px;
  border-radius: 4px;
  background: #fff;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const MeetupInfo = styled.View`
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 150px;
  background: #ddd;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Info = styled.View`
  width: 100%;
  padding: 16px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-left: 10px;
`;

export const Location = styled.Text`
  color: #999;
  font-size: 13px;
  margin-left: 10px;
`;

export const Person = styled.Text`
  color: #999;
  font-size: 13px;
  margin-left: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 14px;
`;

import {
  LoadingSpinnerContainer,
  LoadingSpinnerOverlay,
} from './loading-spinner.styles';

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerOverlay>
      <LoadingSpinnerContainer />
    </LoadingSpinnerOverlay>
  );
};

export default LoadingSpinner;

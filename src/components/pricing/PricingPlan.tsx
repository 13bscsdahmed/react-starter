import type { FC } from 'react';
import propTypes from 'prop-types';
import { Box, Button, Divider, Typography } from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import type { SxProps } from '@material-ui/system';
import CheckIcon from '../../icons/Check';

interface PricingPlanProps {
  cta: string;
  currency: string;
  description: string;
  features: string[];
  image: string;
  name: string;
  popular?: boolean;
  price: string;
  sx?: SxProps<Theme>;
}

const PricingPlan: FC<PricingPlanProps> = (props) => {
  const {
    cta,
    currency,
    description,
    features,
    image,
    name,
    popular,
    price,
    sx,
    ...other
  } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ...sx
      }}
      {...other}
    >
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            height: 52,
            width: 52,
            '& img': {
              height: 'auto',
              width: '100%'
            }
          }}
        >
          <img
            alt=""
            src={image}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography
            color="textPrimary"
            variant="h6"
          >
            {currency}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {price}
          </Typography>
          <Typography
            color="textSecondary"
            sx={{
              alignSelf: 'flex-end',
              ml: 1
            }}
            variant="subtitle2"
          >
            /mo
          </Typography>
        </Box>
        <Typography
          color="textPrimary"
          sx={{ mt: 2 }}
          variant="h6"
        >
          {name}
        </Typography>
        <Typography
          color="textSecondary"
          sx={{ mt: 2 }}
          variant="body2"
        >
          {description}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          p: 3
        }}
      >
        {features.map((feature) => (
          <Box
            key={feature}
            sx={{
              alignItems: 'center',
              display: 'flex',
              '& + &': {
                mt: 2
              }
            }}
          >
            <CheckIcon
              fontSize="small"
              sx={{ color: 'text.primary' }}
            />
            <Typography
              color="textPrimary"
              sx={{
                fontWeight: 500,
                ml: 2
              }}
              variant="body2"
            >
              {feature}
            </Typography>
          </Box>
        ))}
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 6
          }}
        >
          <Button
            fullWidth
            color="primary"
            variant={popular ? 'contained' : 'outlined'}
          >
            {cta}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

PricingPlan.propTypes = {
  cta: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  features: propTypes.array.isRequired,
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  popular: propTypes.bool,
  price: propTypes.string.isRequired,
  sx: propTypes.object
};

export default PricingPlan;

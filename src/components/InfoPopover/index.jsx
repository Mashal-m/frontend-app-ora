import React from 'react';
import PropTypes from 'prop-types';

import {
  OverlayTrigger,
  Popover,
  Icon,
  IconButton,
} from '@edx/paragon';
import { InfoOutline } from '@edx/paragon/icons';
import { useIntl } from '@edx/frontend-platform/i18n';

import { nullMethod } from 'hooks';

import messages from './messages';

/**
 * <InfoPopover />
 */
export const InfoPopover = ({ onClick, children }) => {
  const { formatMessage } = useIntl();
  return (
    <OverlayTrigger
      trigger="focus"
      placement="right-end"
      flip
      overlay={(
        <Popover id="info-popover" className="overlay-help-popover">
          <Popover.Content>{children}</Popover.Content>
        </Popover>
      )}
    >
      <IconButton
        className="esg-help-icon"
        src={InfoOutline}
        alt={formatMessage(messages.altText)}
        iconAs={Icon}
        onClick={onClick}
      />
    </OverlayTrigger>
  );
};

InfoPopover.defaultProps = {
  onClick: nullMethod,
};
InfoPopover.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default InfoPopover;

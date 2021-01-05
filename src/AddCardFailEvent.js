import React from "react";
import PropTypes from "prop-types";
import {Phone, PhonePlaceholder} from "@yosmy/phone";
import {EventInvolved} from "@yosmy/event";
import {Json, Text} from "@yosmy/ui";
import {enrich as phoneEnrich} from "@yosmy/phone";
import {enrich as paymentEnrich} from "@yosmy/payment-backend";
import {enrichUsers} from "./CommonEvent";

const type = "yosmy.payment.add_card_fail";

const AddCardFailEvent = ({
    ui, involved, extra, date, hide, onSelectInvolved
}) => {
    return <ui.layout
        label={<Text>El usuario intentó añadir la tarjeta</Text>}
        involved={[
            !hide.user && <EventInvolved
                label="Usuario"
            >
                {typeof involved.user === "string"
                    ? <PhonePlaceholder/>
                    : <Phone
                        country={involved.user.country}
                        prefix={involved.user.prefix}
                        number={involved.user.number}
                        onClick={() => {
                            onSelectInvolved(
                                "user",
                                involved.user
                            );
                        }}
                    />
                }
            </EventInvolved>,
            !hide.fingerprint && <EventInvolved
                label="Fingerprint"
            >
                <Text
                    onClick={() => {
                        onSelectInvolved(
                            "fingerprint",
                            involved.fingerprint
                        );
                    }}
                >
                    {involved.fingerprint}
                </Text>
            </EventInvolved>
        ]}
        extra={<Json>{extra}</Json>}
        date={date}
    />
}

AddCardFailEvent.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired
    }).isRequired,
    involved: PropTypes.shape({
        user: phoneEnrich.UserProp,
        fingerprint: paymentEnrich.FingerprintProp,
    }).isRequired,
    hide: PropTypes.shape({
        user: PropTypes.bool,
        fingerprint: PropTypes.bool,
    }).isRequired,
    onSelectInvolved: PropTypes.func.isRequired
};

AddCardFailEvent.defaultProps = {
    hide: {
        user: false,
        fingerprint: false
    }
};

const enrichAddCardFailEvent = async (events, api) => {
    events = await enrichUsers(
        events,
        api,
        type
    );

    return events;
}

export {
    AddCardFailEvent,
    type as AddCardFailEventType,
    enrichAddCardFailEvent,
};
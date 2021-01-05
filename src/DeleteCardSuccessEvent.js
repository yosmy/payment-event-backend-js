import React from "react";
import PropTypes from "prop-types";
import {EventInvolved} from "@yosmy/event";
import {CreditCard, Json, Text} from "@yosmy/ui";
import {enrich as phoneEnrich} from "@yosmy/phone";
import {enrich as paymentEnrich} from "@yosmy/payment-backend";
import {Phone, PhonePlaceholder} from "@yosmy/phone";
import {enrichUsers, enrichCards} from "./CommonEvent";

const type = "yosmy.payment.delete_card_success";

const DeleteCardSuccessEvent = ({
    ui, involved, extra, date, hide, onSelectInvolved
}) => {
    return <ui.layout
        label={<Text>El usuario borró la tarjeta</Text>}
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
            !hide.card && <EventInvolved
                label="Tarjeta"
            >
                <CreditCard
                    last4={involved.card.last4}
                    onClick={() => {
                        onSelectInvolved(
                            "card",
                            involved.card
                        );
                    }}
                />
            </EventInvolved>
        ]}
        extra={<Json>{extra}</Json>}
        date={date}
    />
}

DeleteCardSuccessEvent.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired
    }).isRequired,
    involved: PropTypes.shape({
        user: phoneEnrich.UserProp,
        card: paymentEnrich.CardProp,
    }).isRequired,
    hide: PropTypes.shape({
        user: PropTypes.bool,
        card: PropTypes.bool,
    }).isRequired,
    onSelectInvolved: PropTypes.func.isRequired
};

DeleteCardSuccessEvent.defaultProps = {
    hide: {
        user: false,
        card: false
    }
};

const enrichDeleteCardSuccessEvent = async (events, api) => {
    events = await enrichUsers(
        events,
        api,
        type
    );

    events = await enrichCards(
        events,
        api,
        type
    );

    return events;
}

export {
    DeleteCardSuccessEvent,
    type as DeleteCardSuccessEventType,
    enrichDeleteCardSuccessEvent,
};
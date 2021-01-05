import React from "react";
import {AddCardSuccessEvent, AddCardSuccessEventType} from "./AddCardSuccessEvent";
import {AddCardFailEvent, AddCardFailEventType} from "./AddCardFailEvent";
import {DeleteCardSuccessEvent, DeleteCardSuccessEventType} from "./DeleteCardSuccessEvent";
import {ExecuteChargeSuccessEvent, ExecuteChargeSuccessEventType} from "./ExecuteChargeSuccessEvent";
import {ExecuteChargeFailEvent, ExecuteChargeFailEventType} from "./ExecuteChargeFailEvent";
import {RefundChargeSuccessEvent, RefundChargeSuccessEventType} from "./RefundChargeSuccessEvent";

const resolve = (labels) => {
    if (labels.includes(AddCardSuccessEventType)) {
        return AddCardSuccessEvent;
    }
    else if (labels.includes(AddCardFailEventType)) {
        return AddCardFailEvent;
    }
    else if (labels.includes(DeleteCardSuccessEventType)) {
        return DeleteCardSuccessEvent;
    }
    else if (labels.includes(ExecuteChargeSuccessEventType)) {
        return ExecuteChargeSuccessEvent;
    }
    else if (labels.includes(ExecuteChargeFailEventType)) {
        return ExecuteChargeFailEvent;
    }
    else if (labels.includes(RefundChargeSuccessEventType)) {
        return RefundChargeSuccessEvent;
    }

    return false;
};

export default resolve;
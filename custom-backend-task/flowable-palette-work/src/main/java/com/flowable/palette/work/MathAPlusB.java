package com.flowable.palette.work;

import org.flowable.common.engine.api.variable.VariableContainer;
import org.springframework.stereotype.Service;

import com.flowable.platform.tasks.AbstractPlatformTask;
import com.flowable.platform.tasks.ExtensionElementsContainer;

@Service
public class MathAPlusB extends AbstractPlatformTask {

    @Override
    public void executeTask(VariableContainer variableContainer, ExtensionElementsContainer extensionElementsContainer) {
        int inputA = getExtensionElementValue("input-a", extensionElementsContainer, variableContainer, 0);
        int inputB = getExtensionElementValue("input-b", extensionElementsContainer, variableContainer, 0);
        String output = getStringExtensionElementValue("output", extensionElementsContainer, variableContainer, "r");

        variableContainer.setVariable(output, inputA + inputB);
    }
}

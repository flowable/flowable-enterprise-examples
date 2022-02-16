package com.flowable.palette.work;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

/**
 * Because executing a Spring Boot Test will actually start Flowable and therefore additional
 * infrastructure like elasticsearch is needed to run this test it is not a Unit Test but an
 * Integration Test and should therefore not executed by maven surefire. Therefore the ending IT
 * (for IntegrationTest) instead of Test.
 */
@SpringBootTest
@ExtendWith(SpringExtension.class)
class FlowablePaletteWorkApplicationIT {

    @Test
    void canStartApplication() {

    }
}
package com.flowable.palette.work;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.freemarker.FreeMarkerAutoConfiguration;

@SpringBootApplication(exclude = {FreeMarkerAutoConfiguration.class})
public class FlowablePaletteWorkApplication {

    public static void main(String[] args) {
        SpringApplication.run(FlowablePaletteWorkApplication.class, args);
    }
}

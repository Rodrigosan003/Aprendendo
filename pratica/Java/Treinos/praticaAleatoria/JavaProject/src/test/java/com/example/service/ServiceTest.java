package com.example.service;

import com.example.model.Model;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit test for Service
 */
public class ServiceTest {

    private Service service;

    @BeforeEach
    public void setUp() {
        service = new Service();
    }

    @Test
    public void testProcessWithValidModel() {
        Model model = new Model("Test", 100);
        String result = service.process(model);
        assertEquals("Processed: Test with value 100", result);
    }

    @Test
    public void testProcessWithNullModel() {
        String result = service.process(null);
        assertEquals("Model is null", result);
    }

    @Test
    public void testValidateWithValidModel() {
        Model model = new Model("Test", 100);
        assertTrue(service.validate(model));
    }

    @Test
    public void testValidateWithNullModel() {
        assertFalse(service.validate(null));
    }

    @Test
    public void testValidateWithEmptyName() {
        Model model = new Model("", 100);
        assertFalse(service.validate(model));
    }
}


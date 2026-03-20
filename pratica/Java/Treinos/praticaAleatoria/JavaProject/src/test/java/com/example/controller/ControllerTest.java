package com.example.controller;

import com.example.model.Model;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit test for Controller
 */
public class ControllerTest {

    private Controller controller;

    @BeforeEach
    public void setUp() {
        controller = new Controller();
    }

    @Test
    public void testHandleRequest() {
        String result = controller.handleRequest("Test", 100);
        assertEquals("Processed: Test with value 100", result);
    }

    @Test
    public void testHandleRequestWithInvalidData() {
        String result = controller.handleRequest("", 100);
        assertEquals("Invalid model data", result);
    }

    @Test
    public void testGetAllModels() {
        controller.handleRequest("Test1", 100);
        controller.handleRequest("Test2", 200);
        
        assertEquals(2, controller.getAllModels().size());
    }

    @Test
    public void testFindByName() {
        controller.handleRequest("Test", 100);
        
        Model found = controller.findByName("Test");
        assertNotNull(found);
        assertEquals("Test", found.getName());
    }

    @Test
    public void testDeleteModel() {
        controller.handleRequest("Test", 100);
        assertEquals(1, controller.getAllModels().size());
        
        controller.deleteModel("Test");
        assertEquals(0, controller.getAllModels().size());
    }
}


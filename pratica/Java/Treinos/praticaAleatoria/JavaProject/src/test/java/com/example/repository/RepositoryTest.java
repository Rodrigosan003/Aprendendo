package com.example.repository;

import com.example.model.Model;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit test for Repository
 */
public class RepositoryTest {

    private Repository repository;

    @BeforeEach
    public void setUp() {
        repository = new Repository();
    }

    @Test
    public void testSave() {
        Model model = new Model("Test", 100);
        repository.save(model);
        assertEquals(1, repository.count());
    }

    @Test
    public void testFindByName() {
        Model model = new Model("Test", 100);
        repository.save(model);
        
        Model found = repository.findByName("Test").orElse(null);
        assertNotNull(found);
        assertEquals("Test", found.getName());
    }

    @Test
    public void testFindByNameNotFound() {
        Model found = repository.findByName("NonExistent").orElse(null);
        assertNull(found);
    }

    @Test
    public void testFindAll() {
        repository.save(new Model("Test1", 100));
        repository.save(new Model("Test2", 200));
        
        assertEquals(2, repository.findAll().size());
    }

    @Test
    public void testDelete() {
        repository.save(new Model("Test", 100));
        assertEquals(1, repository.count());
        
        repository.delete("Test");
        assertEquals(0, repository.count());
    }
}


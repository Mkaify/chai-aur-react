package sqe10;

import org.junit.*;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    @BeforeClass
    public static void setUpBeforeClass() throws Exception {
        System.out.println("Setup before all tests");
    }

    @AfterClass
    public static void tearDownAfterClass() throws Exception {
        System.out.println("Teardown after all tests");
    }

    @Before
    public void setUp() throws Exception {
        calc = new Calculator();
    }

    @After
    public void tearDown() throws Exception {
        calc = null;
    }

    @Test
    public void testAdd() {
        int result = calc.add(20, 30);
        assertEquals("Addition result mismatch", 50, result);
    }

    @Test(timeout = 100)
    public void testMultiply() {
        int result = calc.multiply(10, 3);
        assertEquals("Multiplication result mismatch", 30, result);
    }

    @Test
    public void testSubtract() {
        int result = calc.subtract(100, 3);
        assertEquals("Subtraction result mismatch", 97, result);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        calc.divide(100, 0);
    }

    @Test
    public void testDivide() {
        int result = calc.divide(333, 3);
        assertEquals("Division result mismatch", 111, result);
    }

    @Test
    public void testNotNullCalculator() {
        assertNotNull("Calculator instance should not be null", calc);
    }

    @Test
    public void testSameObject() {
        assertSame("Calculator object reference mismatch", calc, calc);
    }

    @Ignore("Test not implemented yet")
    @Test
    public void testIgnoredFeature() {
        fail("This test is ignored and should not run");
    }

    @Test
    public void testDivideNegativeNumbers() {
        int result = calc.divide(-100, 4);
        assertTrue("Result should be negative", result < 0);
    }

    @Test
    public void testDivideWithTolerance() {
        double result = (double) calc.divide(10, 3);
        assertEquals("Division with tolerance", 3.33, result, 0.01);
    }
}

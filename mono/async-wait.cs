using System;
using System.Threading.Tasks;
 
namespace AsyncAwaitExample
{
    class Program
    {
        static void Main()
        {
           var demo = new AsyncAwaitDemo();
           demo.DoStuff();
 
           while (true)
           {
               System.Threading.Thread.Sleep(2000);
               Console.WriteLine("Doing Stuff on the Main Thread...................");
           }
        }
    }
 
    public class AsyncAwaitDemo
    {
        public async Task DoStuff()
        {
            await Task.Run(() =>
            {
                LongRunningOperation();
            });   
        }
 
        private static async Task<string> LongRunningOperation()
        {
            int counter;
 
            for (counter = 0; counter < 50000; counter++)
            {
                System.Threading.Thread.Sleep(100);
                Console.WriteLine(counter);
            }
 
            return "Counter = " + counter;
        }
    }
}

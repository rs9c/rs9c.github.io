# 看嘛看，无聊弄的

[《欢迎使用Markdown笔记》-来自uTools↗︎](/utools-欢迎使用%20Markdown%20笔记.md)

*~~随便复制一段代码凑凑字~~*
```csharp
using System;

internal class playGround
{
    //声明
    static string? mode;
    static long msec_total;
    static long sec_total;
    static short msec;
    static long min_total;
    static short sec;
    static long hour_total;
    static short min;
    static short hour;

    static long day_total;
    static int days;
    static int year;
    static int yday;
    static bool leap;//??
    static int leap1;
    static int mon;
    static int mday;
    static int wday;//wk

    private static void Main()
    {
        //询问方案
        Console.WriteLine("1: H+m+s+ms\n2:+date");
        mode = Console.ReadLine();
        if (mode == "1")
        {
            Hmsm();
        } else if (mode == "2") {
            Date();
        }
        else
        {
            Console.WriteLine("ERROR! Try again.");
            Main();
        }
    }

    // private static void Date()
    // {
    //     Date(leap);
    // }

    //+date
    private static void Date()
    {
        long.TryParse(Console.ReadLine(), out msec_total);//input ms
        sec_total = msec_total / 1000;//sec
        msec = (short)(msec_total % 1000); //require ms
        min_total = sec_total / 60;//min
        sec = (short)(sec_total % 60); //require sec
        hour_total = min_total / 60;//hr
        min = (short)(min_total % 60); //require min
        hour = (short)(hour_total % 24); //require hr

        day_total = hour_total / 24;
        days = (int)(day_total - (31 + 28) + 719527);
        
        year = (days + 2) * 400 / (365 * 400 + 100 - 4 + 1);
        
        yday = days - (365 * year + year / 4 - year / 100 + year / 400);

        /* %<0 y-1*/
        if (yday < 0)
        {
            leap = (year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0));
            if (leap)
            {
                leap1 = 1;
            }
            else
            {
                leap1 = 0;
            }
            /* add year_leap */
            yday = 365 + leap1 + yday;
            year--;
        }
        /* 30.6 -x each mon */
        mon = (yday + 31) * 10 / 306;
        mday = yday - (367 * mon / 12 - 30) + 1;
        if (yday >= 306)
        {
            year++;
            mon -= 10;
            
        }
        else
        {
            mon += 2;
            
        }
        wday = (4 + days) % 7 - 1; /* 1970.1.1=>TH */
        if (wday == -1)
        {
            wday = 6;
        }

        Console.WriteLine("req: \n{0}h {1}m {2}s {3}ms。\n{6}/{5}/{4}({7}) \n请继续\n", hour, min, sec, msec, mday, mon, year, wday);
        Date();
    }

    //时分秒毫秒
    private static void Hmsm()
    {
        long.TryParse(Console.ReadLine(), out msec_total);//input ms
        sec_total = msec_total / 1000;//sec
        msec = (short)(msec_total % 1000); //require ms
        min_total = sec_total / 60;//min
        sec = (short)(sec_total % 60); //require sec
        hour_total = min_total / 60;//hr
        min = (short)(min_total % 60); //require min
        hour = (short)(hour_total % 24); //require hr

        Console.WriteLine("req: \n时：{0}，分：{1}，秒：{2}，毫秒：{3}。\n请继续\n", hour, min, sec, msec);
        Hmsm();
    }

    
}

```
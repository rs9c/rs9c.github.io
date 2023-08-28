### 看嘛看，无聊弄的
~~*啊吧啊吧*~~
# 代码区
> **检测横竖屏（示例）**
```css
/*
记得把这玩意塞进meta里：
 id="viewport" name="viewport" content="width=device-width, initial-scale=1"
 */
/* 横屏显示标准字体 */
@media only screen and (orientation: landscape) {
  font-size: 18px;
}
/* 竖屏显示大字体 */
@media only screen and (orientation: portrait) {
  font-size: 36px;
}
```
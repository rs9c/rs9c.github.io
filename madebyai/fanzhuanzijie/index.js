/**
 * @Author: DeepSeek-R1
 * @FilePath: /rs9c.github.io/madebyai/fanzhuanzijie/index.js
 */

document.addEventListener("DOMContentLoaded", function () {
    const hexInput = document.getElementById("hexInput");
    const reversedHex = document.getElementById("reversedHex");
    const reverseBtn = document.getElementById("reverseBtn");
    const copyBtn = document.getElementById("copyBtn");
    const originalHex = document.getElementById("originalHex");
    const reversedResult = document.getElementById("reversedResult");
    const originalHexValue = document.getElementById("originalHexValue");
    const reversedHexValue = document.getElementById("reversedHexValue");
    const originalBinary = document.getElementById("originalBinary");
    const reversedBinary = document.getElementById("reversedBinary");

    // 反转选项
    const bitReverseOption = document.getElementById("bitReverseOption");
    const byteReverseOption = document.getElementById("byteReverseOption");
    const prefixOption = document.getElementById("prefixOption");
    const uppercaseOption = document.getElementById("uppercaseOption");

    // 初始示例
    updateDisplay("B54AFF00");

    // 反转按钮事件
    reverseBtn.addEventListener("click", function () {
        const inputValue = hexInput.value.trim().toUpperCase();
        if (validateHex(inputValue)) {
            updateDisplay(inputValue);
        } else {
            alert("请输入有效的32位十六进制值（8个字符，如B54AFF00）");
            hexInput.value = "B54AFF00";
            updateDisplay("B54AFF00");
        }
    });

    // 复制按钮事件
    copyBtn.addEventListener("click", function () {
        reversedHex.select();
        document.execCommand("copy");

        // 显示复制反馈
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> 已复制!';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });

    // 输入验证
    hexInput.addEventListener("input", function () {
        let value = hexInput.value.trim().toUpperCase();
        // 移除非十六进制字符
        value = value.replace(/[^0-9A-F]/g, "");
        // 限制为8个字符
        if (value.length > 8) {
            value = value.substring(0, 8);
        }
        hexInput.value = value;
    });

    // 选项变化时自动更新
    [bitReverseOption, byteReverseOption, prefixOption, uppercaseOption].forEach((option) => {
        option.addEventListener("change", function () {
            const inputValue = hexInput.value.trim().toUpperCase();
            if (validateHex(inputValue)) {
                updateDisplay(inputValue);
            }
        });
    });

    // 验证十六进制输入
    function validateHex(value) {
        return /^[0-9A-F]{8}$/.test(value);
    }

    // 反转处理
    function reverseValue(hexValue) {
        // 确保有8个字符
        hexValue = hexValue.padStart(8, "0");

        let bytes = [];
        // 处理每个字节
        for (let i = 0; i < 8; i += 2) {
            const byteHex = hexValue.substring(i, i + 2);
            const byteValue = parseInt(byteHex, 16);

            // 根据选项决定是否反转比特
            let processedByte = byteValue;
            if (bitReverseOption.checked) {
                processedByte = reverseBits(byteValue);
            }

            bytes.push({
                original: byteValue,
                processed: processedByte,
                hex: processedByte.toString(16).padStart(2, "0"),
            });
        }

        // 根据选项决定是否反转字节顺序
        if (byteReverseOption.checked) {
            bytes.reverse();
        }

        // 组合结果
        const resultHex = bytes.map((b) => b.hex).join("");

        // 根据选项格式化输出
        let output = uppercaseOption.checked ? resultHex.toUpperCase() : resultHex.toLowerCase();
        if (prefixOption.checked) {
            output = "0x" + output;
        }

        return {
            hex: output,
            bytes: bytes,
        };
    }

    // 反转一个字节的比特顺序
    function reverseBits(byte) {
        let reversed = 0;
        for (let i = 0; i < 8; i++) {
            reversed = (reversed << 1) | (byte & 1);
            byte >>= 1;
        }
        return reversed;
    }

    // 生成二进制表示
    function generateBinaryRepresentation(byte) {
        let bits = [];
        for (let j = 7; j >= 0; j--) {
            const bit = (byte >> j) & 1;
            bits.push(bit);
        }
        return bits;
    }

    // 更新显示
    function updateDisplay(value) {
        const result = reverseValue(value);

        // 更新输入字段
        reversedHex.value = result.hex;

        // 更新结果区域
        const originalFormatted = prefixOption.checked ? "0x" + value : value;
        originalHex.textContent = originalFormatted;
        reversedResult.textContent = result.hex;
        originalHexValue.textContent = value;
        reversedHexValue.textContent = result.hex.replace("0x", "");

        // 更新二进制表示
        updateBinaryDisplay(value, result.bytes);
    }

    // 更新二进制显示
    function updateBinaryDisplay(hexValue, resultBytes) {
        // 原始二进制表示
        let originalHtml = "";
        for (let i = 0; i < 4; i++) {
            const byteHex = hexValue.substring(i * 2, i * 2 + 2);
            const byteValue = parseInt(byteHex, 16);
            const bits = generateBinaryRepresentation(byteValue);

            originalHtml += `<div class="binary-row">`;
            originalHtml += `<div class="byte-label">字节 ${i + 1}:</div>`;
            originalHtml += `<div class="bits">`;

            bits.forEach((bit) => {
                originalHtml += `<div class="bit original-bit">${bit}</div>`;
            });

            originalHtml += `</div></div>`;
        }
        originalBinary.innerHTML = originalHtml;

        // 转换后二进制表示
        let reversedHtml = "";
        resultBytes.forEach((byte, index) => {
            const bits = generateBinaryRepresentation(byte.processed);

            reversedHtml += `<div class="binary-row">`;
            reversedHtml += `<div class="byte-label">字节 ${index + 1}:</div>`;
            reversedHtml += `<div class="bits">`;

            bits.forEach((bit) => {
                reversedHtml += `<div class="bit reversed-bit">${bit}</div>`;
            });

            reversedHtml += `</div></div>`;
        });
        reversedBinary.innerHTML = reversedHtml;
    }
});

#include <stdio.h>
#include <stdlib.h>

int top = -1, n;
void push(int a[], int e) {
    if (top == n - 1) {
        printf("Stack is Full\n");
    } else {
        top++;
        a[top] =e ;
        printf("*********************************\n");
        printf("Element %d is pushed\n", e);
        printf("*********************************\n");
    }
}

void pop(int a[]) {
    if (top == -1) {
        printf("*********************************\n");
        printf("Stack is Underflow\n");
        printf("*********************************\n");
    } else {
        printf("*********************************\n");
        printf("Element %d is popped\n", a[top--]);
        printf("*********************************\n");
    }
}

void peek(int a[]) {
    if (top == -1) {
        printf("*********************************\n");
        printf("Stack is Underflow\n");
        printf("*********************************\n");
    } else {
        printf("*********************************\n");
        printf("The topmost element is %d\n", a[top]);
        printf("*********************************\n");
    }
}

void display(int a[]) {
    if (top == -1) {
        printf("Stack is Empty\n");
    } else {
        printf("Elements of Stack are:\n");
        printf("**************************************\n");
        for (int i = top; i >= 0; i--) {
            printf("%d\n", a[i]);
        }
        printf("**************************************\n");
    }
}

int main() {
    printf("Enter the size of the Array: ");
    scanf("%d", &n);
    int a[n], e;

    while (1) {
        int ch;
        printf("\n\n1. Insert element\t2. Delete element\n");
        printf("3. Peep\t\t\t4. Display\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1:
                printf("Enter the element to be pushed: ");
                scanf("%d", &e);
                push(a, e);
                break;
            case 2:
                pop(a);
                break;
            case 3:
                peek(a);
                break;
            case 4:
                display(a);
                break;
            case 5:
                exit(0);
            default:
                printf("Enter the choice correctly!\n");
        }
    }

    return 0;
}
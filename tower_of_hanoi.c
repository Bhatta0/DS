#include<stdio.h>
void tower(int n, char src,char hlpr,char des){
    if(n==0){
        return;
    }
    tower(n-1,src,des,hlpr);
    printf("Move disk %d from %c to %c\n",n,src,des);
    tower(n-1,hlpr,src,des);
}
int main(){
    int n;
    printf("Enter number of disks:\n");
    scanf("%d",&n);
    tower(n,'A','B','C');
}